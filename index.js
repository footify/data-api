module.exports = {
  teamModel: require('./lib/team/team.model'),
  teamRepository: require('./lib/team/team.repository'),
  pubModel: require('./lib/pub/pub.model'),
  pubRepository: require('./lib/pub/pub.repository'),
  ligueModel: require('./lib/ligue/ligue.model'),
  ligueRepository: require('./lib/ligue/ligue.repository'),
  ligueRankingModel: require('./lib/ligue/ligue_ranking.model'),
  ligueRankingRepository: require('./lib/ligue/ligue_ranking.repository'),
  gameModel: require('./lib/game/game.model'),
  gameRepository: require('./lib/game/game.repository'),
  friendModel: require('./lib/friend/friend.model'),
  friendRepository: require('./lib/friend/friend.repository'),
  babyfootModel: require('./lib/babyfoot/babyfoot.model'),
  babyfootRepository: require('./lib/babyfoot/babyfoot.repository'),
  authSchema: require('./lib/auth/auth.schema'),
  accessTokenModel: require('./lib/auth/access-token.model'),
  accessTokenRepository: require('./lib/auth/access-token.repository'),
  clientModel: require('./lib/auth/client.model'),
  clientRepository: require('./lib/auth/client.repository'),
  refreshTokenModel: require('./lib/auth/refresh-token.model'),
  refreshTokenRepository: require('./lib/auth/refresh-token.repository'),
  userModel: require('./lib/user/user.model'),
  userRepository: require('./lib/user/user.repository'),
  userSchema: require('./lib/user/user.schema'),
  utils: require('./lib/utils')
};
