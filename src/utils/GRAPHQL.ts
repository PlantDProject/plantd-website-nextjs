export const GET_ONGOING_EVENTS = `query getOngoingEventsForWebsite {
    getOngoingEventsForWebsite {
      events {
        eventDate
        eventId
        eventSlug
        eventName
        imageUrl
        }
    }
}`

export const GET_PAST_EVENTS = `query getPastEventsForWebsite(
  $page: Int!,
  $size: Int!
) {
  getPastEventsForWebsite(
    page: $page,
    size: $size
  ) {
    events {
      eventDate
      eventId
      eventSlug
      eventName
      imageUrl
    }
    totalCount
  }
}`

export const GET_EVENT_BY_ID = `query getEventByIdForWebsite($eventSlug: String!){
    getEventByIdForWebsite(eventSlug: $eventSlug) {
        eventId,
        eventDescription,
        eventTitle,
        imageUrl,
        videoUrl,
        eventThumbnail,
        eventDate,
        sweepstakeRules,
    }
  }`;

export const GET_EVENT_WINNERS = `query GetWinners($eventId: String!, $searchText: String) {
  websiteGetWinners(eventId: $eventId, listEventWinners: { searchText: $searchText }) {
      epId
      status
      date
      isWinner
      rank
      user {
          firstName
          lastName
      }
  }
}`;
