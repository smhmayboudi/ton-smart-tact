import { toNano } from '@ton/core';
import { TonSmartTact } from '../wrappers/TonSmartTact';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const tonSmartTact = provider.open(await TonSmartTact.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await tonSmartTact.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(tonSmartTact.address);

    console.log('ID', await tonSmartTact.getId());
}
