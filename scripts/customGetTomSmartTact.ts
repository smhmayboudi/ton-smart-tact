import { getHttpEndpoint } from '@orbs-network/ton-access';
import { TonClient, Address } from '@ton/ton';
import { TonSmartTact } from '../wrappers/TonSmartTact';

export async function run() {
    const endpoint = await getHttpEndpoint({ network: 'testnet' });
    const client = new TonClient({ endpoint });
    const counterAddress = Address.parse('kQDqNGl4ZfP1pl2Eee0lpQs8KEkxj3_pqq4uRU7N1L1zL9GP');
    const counter = TonSmartTact.fromAddress(counterAddress);
    const counterContract = client.open(counter);
    const counterValue = await counterContract.getCounter();
    console.log('value:', counterValue.toString());
}
