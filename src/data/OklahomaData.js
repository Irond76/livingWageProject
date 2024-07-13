
const wage = 7.25;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 19.33;
const oneAdultlivingWageOneChild = 32.68;
const oneAdultlivingWageTwoChildren = 41.33;
const oneAdultlivingWageThreeChildren = 52.81;
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
const twoAdultsLivingWage = 26.79;
const twoAdultsLivingWageOneChild = 32.07;
const twoAdultsLivingWageTwoChildren = 36.50;
const twoAdultsLivingWageThreeChildren = 38.74;

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
    Management: 103560,
    BusinessFinancial: 73630,
    ComputerMathematical: 84130,
    ArchitectureEngineering: 88150,
    CommunitySocialService: 50280,
    Legal: 88120,
    Education: 48380,
    HealthcarePractitioners: 85740,
    HealthcareSupport: 31510,
    ProtectiveServices: 44560,
    FoodServiceRelated: 25940,
    BuildingGroundsCleaningMaintenance: 29350,
    SalesRelated: 41980,
    OfficeAdministrativeSupport: 39940,
    FarmingFishingForestry: 37940,
    ConstructionExtraction: 49820,
    InstallationMaintenanceRepair: 51680,
    Production: 44390,
    TransportationMaterialMoving: 40000
};