
const ConnectWalletButton = ({ connectWallet }) =>
  
 <button
    className='h-[5rem] text-2xl text-white font-bold py-4 px-10 bg-[#e61f1f] rounded-lg mb-10 hover:scale-125 transition duration-600 ease-in-out'
    // Add an onClick functionality
    onClick={connectWallet}
  >
    Connect Wallet
  </button>

export default ConnectWalletButton