/**
 * Setup service
 */

import fs from 'fs';

interface Result {
  success: boolean;
}

export default async (): Promise<Result> => {
  return {
    success: true,
  };
};
