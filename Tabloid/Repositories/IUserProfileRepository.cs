﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);

        UserProfile GetByUserId(int id);

        List<UserProfile> GetAll();

        List<UserProfile> GetAllDeactivated();

        void Update(UserProfile userProfile);
    }
}