
const wage = 7.25;
const yearlyHours = 2080
const annualStateMinimumWage = wage * yearlyHours
// One Adult Data =====================================
const oneAdultlivingWage = 21.33;
const oneAdultlivingWageOneChild = 36.53;
const oneAdultlivingWageTwoChildren = 44.96;
const oneAdultlivingWageThreeChildren = 59.03;
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
const twoAdultsLivingWage = 30.11;
const twoAdultsLivingWageOneChild = 36.84;
const twoAdultsLivingWageTwoChildren = 41.98;
const twoAdultsLivingWageThreeChildren = 45.31;

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
    Management: 90910,
    BusinessFinancial: 71420,
    ComputerMathematical: 84430,
    ArchitectureEngineering: 85430,
    CommunitySocialService: 52210,
    Legal: 77860,
    Education: 52000,
    HealthcarePractitioners: 88350,
    HealthcareSupport: 32990,
    ProtectiveServices: 50610,
    FoodServiceRelated: 27660,
    BuildingGroundsCleaningMaintenance: 33670,
    SalesRelated: 44650,
    OfficeAdministrativeSupport: 40250,
    FarmingFishingForestry: 41310,
    ConstructionExtraction: 49620,
    InstallationMaintenanceRepair: 50750,
    Production: 42990,
    TransportationMaterialMoving: 42010
};