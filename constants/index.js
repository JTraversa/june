export const INCENTIVE_KEY = [
    process.env.NEXT_PUBLIC_SWIV_TOKEN,
    process.env.NEXT_PUBLIC_UNI_POOL,
    parseInt(process.env.NEXT_PUBLIC_START),
    parseInt(process.env.NEXT_PUBLIC_END),
    process.env.NEXT_PUBLIC_REFUND
]

    // RINKEBY
    // CHAIN_ID=4
    // INFURA='4c62211c73c248ebb0b6df4c999e52d9'
    // SWIV_TOKEN='0x513d0A719A9EB5fEEC02C0433EBa179F2A7E245C'
    // UNI_POOL='0xB1938D91e072bc31Bda2134865cB6b869aA82875'
    // START=1647379801
    // END=1647811801
    // REFUND='0x3f60008Dfd0EfC03F476D9B489D6C5B13B3eBF2C'
    // ETH_USDC_POOL='0x7b2A5f8956fF62b26aC87F22165F75185e2aD639'
    // STAKER='0xe34139463bA50bD61336E0c446Bd8C0867c6fE65'
    // POSITIONS='0xc36442b4a4522e871399cd717abdd847ab11fe88'
    // NFTBATCHER='0xd7F828fB586DB8607204b0A895D0782808b53448'
    // PAIRED_TOKEN='0xc778417E063141139Fce010982780140Aa0cD5Ab'

    // MAINNET
    // CHAIN_ID=1
    // INFURA='4c62211c73c248ebb0b6df4c999e52d9'
    // SWIV_TOKEN='0xbf30461210b37012783957D90dC26B95Ce3b6f2d'
    // UNI_POOL='0x387292c90500C16C9fE1F5A16Ce520677deC507f'
    // START=1647622800
    // END=1650301200
    // REFUND='0x173033758E8623fEE7C612e2f251CEa808127654'
    // USDT_USDC_POOL='0x3416cF6C708Da44DB2624D63ea0AAef7113527C6'
    // STAKER='0xe34139463bA50bD61336E0c446Bd8C0867c6fE65'
    // POSITIONS='0xc36442b4a4522e871399cd717abdd847ab11fe88'
    // NFTBATCHER='0xF83eEE39E723526605d784917b6e38ebCF0f0207'
    // PAIRED_TOKEN='0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

export const ETH_USDC_POOL = process.env.NEXT_PUBLIC_ETH_USDC_POOL

export const STAKER = process.env.NEXT_PUBLIC_STAKER

export const POSITIONS = process.env.NEXT_PUBLIC_POSITIONS

export const NFTBATCHER = process.env.NEXT_PUBLIC_NFTBATCHER

export const PAIRED_TOKEN = process.env.NEXT_PUBLIC_PAIRED_TOKEN

export const PROGRAM_AMOUNT = parseInt(process.env.NEXT_PUBLIC_PROGRAM_AMOUNT)