// src/configs/constants.ts
import { createThirdwebClient, defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { createWallet, walletConnect } from "thirdweb/wallets";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const client = createThirdwebClient({
    clientId: CLIENT_ID,
});

export const wallets = [
    createWallet("io.metamask"),
    walletConnect(),
    createWallet("com.trustwallet.app"),
];

export const chain = defineChain( sepolia );