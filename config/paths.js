module.exports = {
	less: {
		src: 'assets/less/*.less',
		watch: 'assets/less/**/*.less',
		dest: 'dist/css',
		filename: 'less.css'
	},
	css: {
		src: [
			'assets/css/bootstrap.css',
			'assets/css/font-awesome.css'
			],
		dest: 'dist/css',
		filename: 'vendor.css'
	},
	js: {
		vendor: {
			src: 'assets/js/vendor/jquery.min.js',
			dest: 'dist/js',
			filename: 'vendor.js'
		}
	}
};