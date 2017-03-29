/**
 * Created by JP on 2017/2/18.
 */

import {makeDir, copyDir} from './lib/fs'

async function copyPublic({dest}) {
  await makeDir(dest)
  await copyDir('public', `${dest}/public`)
  await copyDir('src/views', `${dest}/views`)
}

export default {
  name: 'copy assets in public folder',
  func: copyPublic
}
