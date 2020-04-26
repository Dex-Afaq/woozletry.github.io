module.exports = {
    theme: {



        extend: {
            colors: {
                'regal-blue': '#030718',
                'cus-green': '#95c11f',

            },
            height: {
                'cus': '600px',
                'cus2': '400px',

                'hreq': '567px'

            },
            width: {
                'big': '500px',
                'small': '400px',
                'medium': '450px',
                'big2': '600px',
                'wreq': '539px',
                'wreq2': '398px'
            },
            spacing: {
                '994': '500px',
                '995': '550px',
                '996': '600px',
                '997': '700px',
                '998': '750px',
                '999': '820px',
                '123': '890px',
                '100': '250px',
                '120': '20rem',
                '130': '25rem',
                '140': '30rem',
                '145': '35rem',
                '160': '40rem',
                '170': '45rem',
                '180': '50rem',
                '200': '60rem',


            }



        },
        screens: {
            'xs': '270px',
            'ns': '444px',
            // => @media (min-width: 270px) { ... }
            'mds': '545px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'mdl': '880px',

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        }
    },
    variants: { // all the following default to ['responsive']
        mixBlendMode: ['responsive'],
        backgroundBlendMode: ['responsive'],
        isolation: ['responsive'],
    },
    plugins: [
        require('tailwindcss-blend-mode')(), // no options to configure
    ]
}