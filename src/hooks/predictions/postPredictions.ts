import { postPredictions as postPredictionsService } from "../../api/service/predictionsSerivce";
import { capitalize } from "../../utils/formatString";

export const postPredictions = async (name: string, values: any) => {
    try {
        await postPredictionsService(name, values);
        alert(`Successfully saved ${capitalize(name)}'s picks!`);
    } catch (err) {
        console.log(err);
    }
};