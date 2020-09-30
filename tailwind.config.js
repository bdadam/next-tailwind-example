module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // extend: {
        //     colors: {
        //         'accent-1': '#333',
        //     },
        // },
    },
    variants: {},
    plugins: [],
};
