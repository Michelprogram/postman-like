/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBookOpen,
  faAddressCard,
  faGear,
  faSitemap,
  faReply,
  faTimeline,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faBookOpen,
  faAddressCard,
  faGear,
  faSitemap,
  faReply,
  faTimeline,
  faGlobe
);

export default FontAwesomeIcon;
