<script>
import { VRow, VCol, VAvatar, VChip } from "vuetify/lib";
import dateAndTime from "date-and-time";
import HelperFuncs from "../../../helpers/functions";

export default {
  name: "room-card",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: "A"
    },
    image: {
      type: String,
      required: false
    },
    latestMessage: {
      type: String,
      required: false,
      default: ""
    },
    numOfNewMessages: {
      type: Number,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    hideOnSmall: {
      type: Boolean,
      required: false,
      default: true
    },
    clipTitle: {
      type: Boolean,
      required: false,
      default: true
    },
    showCheck: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultColor: {
      type: String,
      required: false,
      default: "#f4f4f4"
    }
  },
  methods: {},

  data() {
    return {
      cssVars: {
        "--hide-on-small": this.hideOnSmall ? "none" : "block",
        "--backgroun-color": this.defaultColor
      }
    };
  },

  render() {
    return (
      <div
        class={`card py-3 px-3  ${this.active ? "active" : ""}`}
        onClick={() => {
          this.$emit("click");
        }}
        style={this.cssVars}
      >
        <VRow>
          <VCol cols="auto">
            <VAvatar color={HelperFuncs.stringToHslColor(this.title)}>
              {this.image ? (
                <img src={`${this.$api}${this.image}`} alt={this.title} />
              ) : (
                <span class="white--text headline">
                  {this.title
                    .trim()
                    .charAt(0)
                    .toUpperCase()}
                </span>
              )}
            </VAvatar>
          </VCol>
          <VCol class="details">
            <h4>
              {this.clipTitle
                ? HelperFuncs.trim(this.title, 14)
                : this.title.trim()}
            </h4>
            {this.latestMessage && (
              <p class="mb-0">{HelperFuncs.trim(this.latestMessage, 30)} </p>
            )}
          </VCol>
          {this.numOfNewMessages > 0 && (
            <VChip class="ma-2 chip" color="primary">
              {this.numOfNewMessages}
            </VChip>
          )}
          {this.showCheck && (
            <VChip class="ma-2 chip" color="primary">
              <v-icon name="check" scale={0.8} />
            </VChip>
          )}
          {this.date && !this.numOfNewMessages && (
            <label class="date">
              {dateAndTime.format(new Date(this.date), "MMM DD")}
            </label>
          )}
        </VRow>
      </div>
    );
  }
};
</script>


<style lang="scss" scoped>
.card {
  width: 100%;
  background: var(--backgroun-color);
  position: relative;
  cursor: pointer;

  &:hover {
    background: rgb(233, 233, 233);
  }

  &.active {
    background: rgb(184, 184, 184);
  }

  .chip {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate3d(0, -50%, 0);
  }

  // .details {
  //   display: var(--hide-on-small);
  //   @media screen and (min-width: 768px) {
  //     display: block;
  //   }
  // }

  .date {
    color: #999;
    position: absolute;
    top: 35%;
    right: 10px;
    font-size: 14px;
    transform: translate3d(0, -50%, 0);
    // display: none;
    display: block;
    // @media screen and (min-width: 768px) {
    //   display: block;
    // }
  }
}
</style>