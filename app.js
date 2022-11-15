import * as IPFS from 'ipfs-core';
import fs from 'fs-extra';

async function ipfsClient() {

    const ipfs = await create({ host: 'localhost', port: 5001, protocol: 'http'});
    return ipfs;
}
const imagesDir = './images';
const gateway = 'https://ipfs.io/ipfs/';
const files = fs.readdirSync(imagesDir);
async function main() {
  const ipfs = await IPFS.create();
    
    for(let file of files) {
      const buffer = fs.readFileSync(`${imagesDir}/${file}`);
      const result = await ipfs.add(buffer);
      console.log(result);
      console.log(gateway+result.path);
    }
    
    await ipfs.stop()


}
main();