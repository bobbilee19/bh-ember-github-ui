import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}?access_token=3a90afde9051c0bbcdcf0c3809f3dc1d699318c2`).then(rawRepo => {
      // backing up github's numeric ID
      rawRepo.oldId = rawRepo.id;
      // use the name of the repo as our ID
      rawRepo.id = rawRepo.name;
      return rawRepo;
    });
  }
});
