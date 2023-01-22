import { USERS, PROJECTS } from '../../database/mockdb';

export const resolvers = {
    Query: {
        users: async () => USERS.map(user => {
            let userName = `${user.name.first} ${user.name.last}`;
            let projectforUser = PROJECTS.find(item => item.projectID === user.projectID)
            return { ...user, name: userName, project: projectforUser };
        }),
    }
}