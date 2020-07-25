<script>
import { VRow, VCol, VAvatar, VChip } from "vuetify/lib";
import dateAndTime from "date-and-time";
import MessageContent from "../MessageContent/MessageContent.vue";
import HelperFuncs from "../../../helpers/functions";

export default {
  name: "message",
  props: {
    id: {
      type: String,
      required: true
    },
    loading: {
      type: Number,
      required: false
    },
    data: {
      type: String,
      required: false
    },
    files: {
      type: Array,
      required: false,
      default: () => []
    },
    messageType: {
      type: Number,
      required: false
    },
    date: {
      type: String,
      required: false,
      default: ""
    },
    side: {
      type: Number,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
    personName: {
      type: String,
      required: false,
      default: "N"
    },
    showAvatar: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    cssVars() {
      return {
        "--loading-width": this.loading - 100 + "%",
        "--msg-opacity": this.loading !== -1 ? ".8" : "0.3"
      };
    }
  },

  render() {
    const msgColor = this.side === 1 ? "color-1" : "color-2";
    const justify = this.side === 1 ? "start" : "end";
    const flexDirection = this.side === 1 ? "flex-row" : "flex-row-reverse";
    const loading = this.loading === -1 ? "loading" : "";
    const tooltipSide = this.side === 1 ? "" : "right";

    return (
      <div align="end" class={`d-flex flex-nowrap ${flexDirection}`}>
        <div style="width:50px" class="align-self-end">
          {this.showAvatar && (
            <VAvatar
              color={HelperFuncs.stringToHslColor(this.personName)}
              class="mx-2 mb-1 "
              size="36"
            >
              {this.avatar ? (
                <img src={this.avatar} alt={this.personName} />
              ) : (
                <span class="white--text headline">
                  {this.personName
                    .trim()
                    .charAt(0)
                    .toUpperCase()}
                </span>
              )}
            </VAvatar>
          )}
        </div>
        <VCol class="py-0 msg-wrapper">
          <VRow justify={justify}>
            <div
              class={`msg py-3 px-3 ${msgColor} ${loading}`}
              style={this.cssVars}
            >
              <MessageContent
                files={this.files}
                messageType={this.messageType}
              />
              {this.data}
            </div>
            <VCol class="pa-0" cols={12}></VCol>

            <label class="tooltip">
              <label class="date my-0">
                {dateAndTime.format(new Date(this.date), "hh:mm A")}
              </label>
              <span class={`tooltiptext ${tooltipSide}`}>
                {dateAndTime.format(new Date(this.date), "DD-MM-YYYY hh:mm A")}
              </span>
            </label>
          </VRow>
        </VCol>
      </div>
    );
  }
};
</script>


<style lang="scss" scoped>
.msg-wrapper {
  width: 80%;
  max-width: 500px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
}

.msg {
  display: inline;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  &.loading {
    opacity: var(--msg-opacity);

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: var(--loading-width);
      background: rgba(31, 247, 103, 0.603);
    }
  }

  &.color-1 {
    background-color: #03a9f4;
    border-radius: 20px 20px 20px 0;
    color: #fff;
  }
  &.color-2 {
    background-color: rgb(204, 204, 204);
    border-radius: 20px 20px 0 20px;
    color: #000;
  }
}
.date {
  color: #999;
  font-size: small;
}

// Tooltip Styles
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 100;

  &.right {
    right: 110%;
  }
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  transition-delay: 1s;
}
</style>