const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js}",
  flowbite.content(),],
  theme: {
    extend: {
      height:
      {
        '104':'30rem',
        '200':'36rem',
        '350px':'350px',
        '10':'45px'
       
      },
      width:
      {
        '104':'26rem',
        '200':'36rem',
        '200px':'100px',
        '350px':'350px',
      }
     
      
  },
  plugins: [
    flowbite.plugin()
    
   
  ],
}
}