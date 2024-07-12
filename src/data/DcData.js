
const wage = 17.00;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 23.90;
const oneAdultlivingWageOneChild = 48.30;
const oneAdultlivingWageTwoChildren = 62.51;
const oneAdultlivingWageThreeChildren = 77.96;
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
const twoAdultsLivingWage = 31.39;
const twoAdultsLivingWageOneChild = 37.47;
const twoAdultsLivingWageTwoChildren = 41.94;
const twoAdultsLivingWageThreeChildren = 45.80;

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
    Management: 163960,
    BusinessFinancial: 107730,
    ComputerMathematical: 119610,
    ArchitectureEngineering: 118540,
    CommunitySocialService: 71530,
    Legal: 202480,
    Education: 79490,
    HealthcarePractitioners: 109450,
    HealthcareSupport: 39850,
    ProtectiveServices: 72430,
    FoodServiceRelated: 44850,
    BuildingGroundsCleaningMaintenance: 40330,
    SalesRelated: 56250,
    OfficeAdministrativeSupport: 59030,
    FarmingFishingForestry: 52380,
    ConstructionExtraction: 68740,
    InstallationMaintenanceRepair: 62470,
    Production: 66460,
    TransportationMaterialMoving: 52140
};