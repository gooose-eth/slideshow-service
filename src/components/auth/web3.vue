<template>
<button
  type="button"
  @click="onClickLogin">
  {{label}}
</button>
<dl>
  <dt>Provider</dt>
  <dd>{{state.provider}}</dd>
  <dt>Address</dt>
  <dd>{{state.address}}</dd>
  <dt>Network</dt>
  <dd>{{state.network}}</dd>
</dl>
<teleport to="#modals">
  <ModalWrap
    :visible="visibleWelcome"
    @close="visibleWelcome = false">
    <ModalBody>
      <Welcome
        @close="visibleWelcome = false"
        @submit=""/>
    </ModalBody>
  </ModalWrap>
</teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Web3 from 'web3'
import { accountStore } from '../../store/service.js'
import { ModalWrap, ModalBody } from '../modal/index.js'
import Welcome from './welcome.vue'

const account = accountStore()
let web3
const visibleWelcome = ref(false)
const state = computed(() => {
  return {
    provider: account.provider,
    address: account.address,
    network: account.network,
  }
})
const loggedIn = computed(() => {
  return !!state.value.address
})
const label = computed(() => {
  return loggedIn.value ? '로그아웃' : '로그인'
})

async function onClickLogin()
{
  if (loggedIn.value)
  {
    // 로그아웃
    console.log('로그아웃')
    // TODO: /auth/update/ 호출하여 주소값 뺀상태로 보내기
    // TODO: 스토어에서 값 삭제하기
    account.provider = undefined
    account.address = undefined
  }
  else
  {
    // 로그인
    try
    {
      const accounts = await web3.eth.getAccounts()
      if (accounts?.length > 0)
      {
        await updateAccount(accounts, false)
      }
      else
      {
        await web3.eth.requestAccounts()
      }
    }
    catch (e)
    {
      onErrorRequestWeb3(e)
    }
  }
}

function setupEvents()
{
  if (window.ethereum)
  {
    window.ethereum.on('accountsChanged', updateAccount)
    window.ethereum.on('chainChanged', updateNetwork)
  }
}
function destroyEvents()
{
  if (window.ethereum)
  {
    window.ethereum.removeListener('accountsChanged', updateAccount)
    window.ethereum.removeListener('chainChanged', updateNetwork)
  }
}

async function updateAccount(addr, mounted = false)
{
  const address = addr?.length > 0 ? addr[0] : undefined
  console.warn('setAccount:', address, mounted)
  // TODO: API 검증
  // TODO: API 처리: 데이터베이스에 등록이 안되어 있다면 등록폼 페이지로 이동한다. `/register/`
  // TODO: API 처리: 데이터베이스에 등록 되어있다면 쿠키 업데이트하고 데이터베이스 정보를 리턴한다.
  // TODO: 스토어 업데이트
  if (address)
  {
    account.provider = 'ethereum'
    account.address = address
  }
  else
  {
    account.provider = undefined
    account.address = undefined
  }
}

function updateNetwork()
{
  if (!(web3?.eth?.net))
  {
    account.network = undefined
    return
  }
  web3.eth.net.getNetworkType().then((network) => {
    account.network = network
  })
}

function onErrorRequestWeb3(err, mounted = false)
{
  switch (err.message)
  {
    case 'NO_ACCOUNT':
      if (mounted) return
      console.error('onErrorRequestWeb3()', 'NO_ACCOUNT')
      break
    default:
      // TODO: 오류처리
      console.error('onErrorRequestWeb3()', err)
      break
  }
}

onMounted(async () => {
  try
  {
    if (window.ethereum)
    {
      web3 = new Web3(window.ethereum)
    }
    else
    {
      throw new Error('NOT_INSTALLED')
    }
    if (!web3) return
    setupEvents()
    updateNetwork()
    const accounts = await web3.eth.getAccounts()
    if (accounts?.length > 0) await updateAccount(accounts, true)
  }
  catch (e)
  {
    onErrorRequestWeb3(e, true)
  }
})
onUnmounted(() => {
  if (!web3) return
  destroyEvents()
})
</script>

<style></style>
