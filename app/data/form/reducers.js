import { fromJS } from 'immutable';

const initialState = fromJS({
  ledgerRequest: {
    inProgress: false,
    success: false,
    trxId: null,
    error: false,
  },
  accIdRequest: {
    inProgress: false,
    success: false,
    error: false,
    accId: null,
  },
});

export default function (state = initialState, action) {

  if (action && action.type === 'RESET') {
    return state.merge({
      ledgerRequest: {
        inProgress: false,
        success: false,
        error: false,
        trxId: null,
      },
      accIdRequest: {
        inProgress: false,
        success: false,
        error: false,
        accId: null,
      },
    });
  }

  if (action && action.type === 'SEND_FORM') {
    return state.merge({
      ledgerRequest: {
        inProgress: true,
      },
    });
  }

  if (action && action.type === 'SEND_FORM_SUCCESS') {
    return state.merge({
      ledgerRequest: {
        inProgress: false,
        success: true,
        trxId: action.payload.data.trx_id,
      },
    });
  }

  if (action && action.type === 'SEND_FORM_FAIL') {

    return state.merge({
      ledgerRequest: {
        inProgress: false,
        success: false,
        error: true,
      },
    });
  }

  if (action && action.type === 'GET_ACCOUNT_ID_BY_NAME') {
    return state.merge({
      accIdRequest: {
        inProgress: true,
      },
    });
  }

  if (action && action.type === 'GET_ACCOUNT_ID_BY_NAME_SUCCESS') {
    console.log(action);
    return state.merge({
      accIdRequest: {
        inProgress: false,
        success: true,
        accId: action.payload.data.id,
      },
    });
  }


  if (action && action.type === 'GET_ACCOUNT_ID_BY_NAME_FAIL') {

    if (action.error && parseInt(action.error.status) === 0) {
      console.log('canceled');
      return state.merge({
        ledgerRequest: {
          inProgress: false,
          success: false,
          error: false,
        },
      });
    }


    return state.merge({
      accIdRequest: {
        inProgress: false,
        success: false,
        error: true,
      },
    });

  }


  return state;
}
