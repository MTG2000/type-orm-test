import { storiesOf } from "@storybook/vue";
import Loading from "./index";
storiesOf("Atom/Loading", module)
  .add("Required", () => ({
    components: {
      Loading,
    },

    render() {
      return <Loading />;
    },
  }))
  .add("With Text", () => ({
    components: {
      Loading,
    },

    render() {
      return <Loading loadingText="Loading Something specific" />;
    },
  }));
