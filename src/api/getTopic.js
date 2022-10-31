
import axios from "axios"
export async function getTopic(setListTopic) {
  const stateList = `http://www.mocky.io/v2/5e1d24dd3600005a00c73e8c`
  return await axios.get(stateList).then((response) => {
    setListTopic(response.data.data);
  });
}
