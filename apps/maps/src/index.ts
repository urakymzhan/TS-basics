import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";
const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

// Behind the scenes if user or company satisfies the Mappable Interface meaning they have { lat and lng }

// We restricted googleMap and other engineers not mess with it
// We are telling engineers to only create Users with only  { name and location}
// and Company with { companyName, catchPhrase, location}
