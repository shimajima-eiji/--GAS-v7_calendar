function doPost(e) {
  const token = PropertiesService.getScriptProperties().getProperties().token;
  const api = snippets.ApiManager();
  const object = api.get.slack(e, token);
  api.send.line(object.message);
  api.send.slack(object.message, snippets.getProperties().slack_incomming_debug);
}

function _doPost_test() {
  const e = {
    parameter: {
      token: PropertiesService.getScriptProperties().getProperties().token,
      team_id: 'T0001',
      team_domain: '例',
      
      channel_id: 'test',
      channel_name: 'テスト',
      
      timestamp: '1355517523.000005',
      user_id: 'test',
      user_name: 'スティーブ',
      
      text: 'googlebot: 身軽なツバメの対気速度はどのくらい？',
      
      trigger_word: 'googlebot:'
    }
  };
  doPost(e);
}