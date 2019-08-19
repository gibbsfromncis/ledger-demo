export const SendForm = (formData) => {
  return {
    type: 'SEND_FORM',
    payload: {
      request: {
        method: 'post',
        url: '/typeLedger',
        data: {
          ...formData
        }
      }
    }
  }
};

export const getAccountIdByAccountName = (accountName, options) => {
  return {
    type: 'GET_ACCOUNT_ID_BY_NAME',
    payload: {
      request: {
        url: '/getAcctName/'+accountName,
        cancelToken: options.cancelToken,
      }
    }
  }
};

export const reset = () => {
  return {
    type: 'RESET',
  }
};
