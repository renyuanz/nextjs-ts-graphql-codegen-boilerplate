import { QueryResolvers } from './generated/resolvers'
import { ResolverContext } from './apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'John', status: 'cached' }
  },
}

export default { Query }
