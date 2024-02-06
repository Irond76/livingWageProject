
const wage = 7.25;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 15.65;
const oneAdultlivingWageOneChild = 31.85;
const oneAdultlivingWageTwoChildren = 40.29;
const oneAdultlivingWageThreeChildren = 51.96;
// ====================================================

export const DataSingleAdult = {
    adult: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWage,
        annualStateMinimumWage: annualStateMinimumWage,
        annualLivingWage: oneAdultlivingWage * yearlyHours,
    }
};
export const DataSingleAdultOneChild = {
    adultOneChild: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageOneChild,
        annualStateMinimumWage: annualStateMinimumWage,
        annualLivingWage: oneAdultlivingWageOneChild * yearlyHours
    }
};
export const DataSingleAdultTwoChildren = {
    adultTwoChildren: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageTwoChildren,
        annualStateMinimumWage: annualStateMinimumWage,
        annualLivingWage: oneAdultlivingWageTwoChildren * yearlyHours
    }
};
export const DataSingleAdultThreeChildren = {
    adultThreeChildren: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageThreeChildren,
        annualStateMinimumWage: annualStateMinimumWage,
        annualLivingWage: oneAdultlivingWageThreeChildren * yearlyHours
    }
};




