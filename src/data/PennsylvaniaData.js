
const wage = 7.25;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 21.95;
const oneAdultlivingWageOneChild = 39.37;
const oneAdultlivingWageTwoChildren = 50.09;
const oneAdultlivingWageThreeChildren = 65.08;
// ====================================================

export const DataSingleAdult = {
    adult: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWage,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(oneAdultlivingWage * yearlyHours).toFixed(2)
    }
};
export const DataSingleAdultOneChild = {
    adultOneChild: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageOneChild,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(oneAdultlivingWageOneChild * yearlyHours).toFixed(2)
    }
};
export const DataSingleAdultTwoChildren = {
    adultTwoChildren: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageTwoChildren,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(oneAdultlivingWageTwoChildren * yearlyHours).toFixed(2)
    }
};
export const DataSingleAdultThreeChildren = {
    adultThreeChildren: {
        stateMinimumWage: wage,
        stateLivingWage: oneAdultlivingWageThreeChildren,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(oneAdultlivingWageThreeChildren * yearlyHours).toFixed(2)
    }
};

//  Two Adults One Working Data =========================
const twoAdultsLivingWage = 30.67;
const twoAdultsLivingWageOneChild = 37.14;
const twoAdultsLivingWageTwoChildren = 42.03;
const twoAdultsLivingWageThreeChildren = 44.27;

export const DataTwoAdults = {
    twoAdults: {
        stateMinimumWage: wage,
        stateLivingWage: twoAdultsLivingWage,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(twoAdultsLivingWage * yearlyHours).toFixed(2)
    }
};
export const DataTwoAdultsOneChild = {
    twoAdultsOneChild: {
        stateMinimumWage: wage,
        stateLivingWage: twoAdultsLivingWageOneChild,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(twoAdultsLivingWageOneChild * yearlyHours).toFixed(2)
    }
};
export const DataTwoAdultsTwoChildren = {
    twoAdultsTwoChildren: {
        stateMinimumWage: wage,
        stateLivingWage: twoAdultsLivingWageTwoChildren,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(twoAdultsLivingWageTwoChildren * yearlyHours).toFixed(2)
    }
};
export const DataTwoAdultsThreeChildren = {
    twoAdultsThreeChildren: {
        stateMinimumWage: wage,
        stateLivingWage: twoAdultsLivingWageThreeChildren,
        annualStateMinimumWage: parseFloat(annualStateMinimumWage).toFixed(2),
        annualLivingWage: parseFloat(twoAdultsLivingWageThreeChildren * yearlyHours).toFixed(2)
    }
};
// ======================================================

// Industry Data ========================================
export const DataIndustryWages = {
    Management: 126450,
    BusinessFinancial: 80280,
    ComputerMathematical: 94730,
    ArchitectureEngineering: 89330,
    CommunitySocialService: 51980,
    Legal: 109460,
    Education: 66040,
    HealthcarePractitioners: 89820,
    HealthcareSupport: 33120,
    ProtectiveServices: 52870,
    FoodServiceRelated: 29460,
    BuildingGroundsCleaningMaintenance: 34860,
    SalesRelated: 47010,
    OfficeAdministrativeSupport: 44850,
    FarmingFishingForestry: 39290,
    ConstructionExtraction: 59770,
    InstallationMaintenanceRepair: 55080,
    Production: 45620,
    TransportationMaterialMoving: 42490
};