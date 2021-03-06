import moment from 'moment'
const blockies = require('ethereum-blockies-png')

export default {
	methods: {
		readableTimestamp: function (timestamp) {
			if (timestamp) {
				let momentTime = moment.unix(timestamp.toString())
				return momentTime.format('YYYY-MM-DD HH:mm')
			} else {
				return ''
			}
		},
		etherscanLink: function (value, type) {
			// type tx, address, block
			let baseurl = 'https://kovan.etherscan.io/'
			baseurl += type
			baseurl += '/'
			baseurl += value
			return baseurl
		},
		blockie: function (address) {
			return blockies.createDataURL({
				seed: address
			})
		}
	}
}
