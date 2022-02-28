var fs = require('fs');
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

const pack = {
	name: 'twemoji',
	location: 'docs/assets/images/emojis',
	findFile: unicode => `docs/assets/images/emojis/${unicode}.svg`
};

const generateSprite = pack => {
	console.log(`Generating ${pack.name} sprites`);

	return new Promise((resolve, reject) => {
		gulp.src(pack.findFile('*'))
			.pipe(svgSprite({
				svg: {
					xmlDeclaration: false
				},
				mode: {
					inline: true,
					symbol: {
						dest: '.',
						prefix: 'emoji-%s',
						sprite: pack.name + '.svg',
						bust: false
					},
					example: true
				},
			}))
			.pipe(gulp.dest('docs/assets/images'))
			.on('end', resolve);
	});
};

try {
	fs.statSync(pack.location);

	return generateSprite(pack);
} catch(err) {
	return Promise.reject(err);
}
