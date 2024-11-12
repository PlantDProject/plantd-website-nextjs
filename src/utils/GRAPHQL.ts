import gql from "graphql-tag";

export const GET_CURRENT_APP_VERSION = gql`
query getCurrentAppVersion($appOsName: AppOS!){
  getCurrentAppVersion(appOsName: $appOsName) {
      appOsName
      shouldForceUpdate
      appVersion
  }
}`;
