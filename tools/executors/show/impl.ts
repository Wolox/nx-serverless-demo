import { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface IExecutorOptions {
  text: string;
}


export default async function showExecutor(
  options: IExecutorOptions,
  context: ExecutorContext
) {
  console.info(`In executor!`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);

  const { stdout, stderr } = await promisify(exec)(
    `echo ${options.text}`
  );

  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}
