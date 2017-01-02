import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=3a90afde9051c0bbcdcf0c3809f3dc1d699318c2`).then(rawOrg => {
      // backing up github's numeric ID
      rawOrg.oldId = rawOrg.id;
      // use the name of the repo as our ID
      rawOrg.id = rawOrg.name;
      return rawOrg;
    });
  }
});
