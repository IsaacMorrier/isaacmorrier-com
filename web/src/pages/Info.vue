<template>
  <div>
    <h1>Hi, I'm Isaac Morrier</h1>
    <h2>I study branding, products, people, material culture, and the effects technology has on all of these things and help companies create competitive advantage with that insight.</h2>

    <p>Lately I wrote the strategy for an international soda redesign, launched an energy bar you could order via text message, tweeted llama gifs for a $2 trillion bank, found a new identity for America’s oldest performance running shoe brand, positioned zero-amenity micro-apartments, found a universal language for recycling, growth-hacked coffee, and helped launch the unofficial memecoin of Hustle Twitter.</p>

    <p>These are some of the things I care about:</p>
    <ul>
      <li>people</li>
      <li>the future</li>
      <li>typography</li>
    </ul>

    <p>These are some of the things I don’t care about:</p>

    <ul>
      <li>Any World Series outcome after 2004</li>
    </ul>
    <p>I currently work as a strategist at Design Army in Washington, DC and previously at Verb Energy, DigitasLBi, Trinity Mobile Networks, SapientNitro, and the Behavioral Research Lab at the Yale School of Management. I graduated from Yale University with my B.A. in Sociology in 2017.</p>

    <p>I built this website with Vue and Sanity</p>

    <p>Humans who want to work with me can contact me at isaac@isaacmorrier.com.</p>

    <p>Cheers,</p>

    <p>Isaac</p>
  </div>
</template>

<page-query>
{
  settings: sanitySiteSettings(id: "siteSettings") {
    subtitle
  }
}

</page-query>

<script>

  export default {
    metaInfo: {
      title: 'Info'
    },
    methods: {
      commitSubtitle: function(subtitle) {
        this.$store.commit('setSubtitle', subtitle)
      }
    },
    beforeMount(){
      this.commitSubtitle(this.$page.settings.subtitle)
    }
  }
</script>
