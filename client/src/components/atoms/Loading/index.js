// import { VProgressCircular } from "vuetify/lib";

export default {
  name: "hit-loading",
  props: {
    loadingText: {
      type: String,
      required: false,
      default: "...Loading...",
    },
  },
  render() {
    return (
      <div
        class="container mx-auto text-center row no-gutters justify-content-center align-content-center"
        style={{ height: "75vh" }}
      >
        {/* <VProgressCircular
          size={50}
          color="primary"
          indeterminate
        ></VProgressCircular> */}
        <h2 class="col-12 text-center">{this.$props.loadingText}</h2>
      </div>
    );
  },
};
