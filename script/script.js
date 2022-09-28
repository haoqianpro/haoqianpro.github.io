const BEGAIN_WORK_DATE_STRING = '2022-05-11';
const begainWorkDate = dayjs(BEGAIN_WORK_DATE_STRING);
const today = dayjs();

const workCount = today.diff(begainWorkDate, 'day') + 1;

const span_today = document.getElementById('today');
span_today.innerText = today.format('YYYY年MM月DD日');

const span_workCount = document.getElementById('workCount');
span_workCount.innerText = workCount;
