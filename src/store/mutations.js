let mutations = {
  updateCommonParams(state,payLoad){
    state.CommonParams = payLoad;
    console.log(payLoad);
  }
};
export default mutations;