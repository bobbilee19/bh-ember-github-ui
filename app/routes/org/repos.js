import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=3a90afde9051c0bbcdcf0c3809f3dc1d699318c2`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });
  }
});
