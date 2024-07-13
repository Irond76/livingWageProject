
const wage = 15.00;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 27.89;
const oneAdultlivingWageOneChild = 52.46;
const oneAdultlivingWageTwoChildren = 67.41;
const oneAdultlivingWageThreeChildren = 85.63;
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
const twoAdultsLivingWage = 36.65;
const twoAdultsLivingWageOneChild = 44.16;
const twoAdultsLivingWageTwoChildren = 49.21;
const twoAdultsLivingWageThreeChildren = 52.81;

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
    Management: 152970,
    BusinessFinancial: 96830,
    ComputerMathematical: 118510,
    ArchitectureEngineering: 100210,
    CommunitySocialService: 58470,
    Legal: 157490,
    Education: 75950,
    HealthcarePractitioners: 110080,
    HealthcareSupport: 40040,
    ProtectiveServices: 61630,
    FoodServiceRelated: 38230,
    BuildingGroundsCleaningMaintenance: 43890,
    SalesRelated: 57880,
    OfficeAdministrativeSupport: 53040,
    FarmingFishingForestry: 43850,
    ConstructionExtraction: 75490,
    InstallationMaintenanceRepair: 63930,
    Production: 49200,
    TransportationMaterialMoving: 47630
};