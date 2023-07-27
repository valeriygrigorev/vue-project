import { errorMessage } from "@/utils/messageService";
import { translate as tl } from "@/utils/locales/locale";

function axiosErrorHandle(error) {
        error.request
            ? errorMessage(tl('Error receiving data'))
            : errorMessage(tl('Request formation error'))
}

export { axiosErrorHandle }


