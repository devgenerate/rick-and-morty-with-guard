// @services
import { LoadUserResponse } from '@/services/user.service';

// @models
import { User } from '@/models';

export function userResponseAdapter(userResponse: LoadUserResponse): User {
    return {
        id: userResponse.id,
        name: userResponse.name,
        email: userResponse.type
    }
}