require('dotenv').config()

const { jobType } = require('./constants')
const tornConfig = require('torn-token')
module.exports = {
    netId: Number(process.env.NET_ID) || 56,
    redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
    httpRpcUrl: process.env.HTTP_RPC_URL,
    wsRpcUrl: process.env.WS_RPC_URL,
    oracleRpcUrl: process.env.ORACLE_RPC_URL || 'https://mainnet.infura.io/',
    offchainOracleAddress: '',
    aggregatorAddress: process.env.AGGREGATOR,
    minerMerkleTreeHeight: 20,
    privateKey: process.env.PRIVATE_KEY,
    instances: tornConfig.instances,
    torn: tornConfig,
    tornadoServiceFee: Number(process.env.REGULAR_TORNADO_WITHDRAW_FEE),
    miningServiceFee: Number(process.env.MINING_SERVICE_FEE),
    rewardAccount: process.env.REWARD_ACCOUNT,
    governanceAddress: '',
    tornadoGoerliProxy: '',
    gasLimits: {
        [jobType.TORNADO_WITHDRAW]: 390000,
        WITHDRAW_WITH_EXTRA: 700000,
        [jobType.MINING_REWARD]: 455000,
        [jobType.MINING_WITHDRAW]: 400000,
    },
    minimumBalance: '1000000000000000000',
    baseFeeReserve: Number(process.env.BASE_FEE_RESERVE_PERCENTAGE),
}