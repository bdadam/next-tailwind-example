module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                browsers: 'last 2 versions',
                // autoprefixer: {
                //     flexbox: 'no-2009',
                // },
                // stage: 3,
                // features: {
                //     'custom-properties': false,
                // },
            },
        ],
    ],
};
