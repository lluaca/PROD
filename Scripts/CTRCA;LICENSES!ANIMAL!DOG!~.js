isAppRenewal = false;
if (matches(appTypeArray[3], "Application", "Renewal")) {
isAppRenewal = true;
}
if (isAppRenewal && publicUser) {
include("LIC Calculate Dog License Fees");
}
if (matches(appTypeArray[3], "Renewal") && !publicUser) {
include("LIC Calculate Dog License Fees");
}