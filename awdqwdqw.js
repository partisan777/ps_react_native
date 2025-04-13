// module.exports = {
//     presets: ['module:metro-react-native-babel-preset',],
//     plugins: [
//         [
//             'module-resolver',
//                 {
//                     root: ["."],
//                     alias: {
//                         'crypto': 'react-native-quick-crypto',
//                         'stream': 'readable-stream',
//                         'buffer': '@craftzdog/react-native-buffer',
//                         'url': 'expo-linking',
//                     },
//                 },
//         ],
//         // 'expo-router/babel',
//         // 'babel-plugin-module-resolver',
//     ],
// };


//   //'babel-preset-expo'

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset',],
        plugins: [
            [
                'module-resolver',
                    {
                        root: ["."],
                        alias: {
                            'crypto': 'react-native-quick-crypto',
                            'stream': 'readable-stream',
                            'buffer': '@craftzdog/react-native-buffer',
                            'url': 'expo-linking',
                        },
                    },
            ],
        ]
    };
};
babel.config.js