import { useToast, TYPE  } from "vue-toastification";
const toast = useToast(),
      defaultOptions = {
        timeout: 3000,
        hideProgressBar: true
      }

function successMessage (text, options = {}) {
    toast.success(text, {...defaultOptions, ...options, type: TYPE.SUCCESS })
}

function errorMessage (text, options = {}) {
    toast.error(text, {...defaultOptions, ...options, type: TYPE.ERROR})
}

function warningMessage (text, options = {}) {
    toast.warning(text, {...defaultOptions, ...options, type: TYPE.WARNING})
}

export { successMessage, errorMessage, warningMessage };



