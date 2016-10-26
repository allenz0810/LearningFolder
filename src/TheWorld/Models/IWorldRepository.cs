using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();

        Trip GetTripByName(string tripName);

        Trip GetUserTripByName(string tripName, string userName);

        IEnumerable<Trip> GetTripsByUserName(string tripName);

        void AddTrip(Trip trip);

        void AddStop(string tripName, Stop newStop, string username);

        Task<bool> SaveChangesAsync();

    }
}