function solution({ map, filter, tap }) {
  const noop = tap(() => {});
  /**
   * 주문이 접수 된 이후 결제가 완료되면 조리를 시작해야합니다.
   * 결제가 완료된 주문만 필터링 해주세요.
   */
  function getPaidOrder(event$) {
    // 구현해 주세요
    return event$.pipe(noop);
  }

  /**
   * 새로운 결제완료 이벤트가 도착할 때 마다 지금까지 벌어들인 총 매출을
   * { [메뉴 이름]: 매출액 } 형태로 출력해주세요
   * 매출액 정보에 변동이 있을 때만 이벤트 스트림으로 내보내야 합니다.
   */
  function getTotalSales(event$) {
    // 구현해 주세요
    return event$.pipe(noop);
  }

  /**
   * 배달이 완료되었다면 { transactionId, duration }을 출력해주세요
   * duration은 배달완료 이벤트의 timestamp - 배달시작 이벤트의 timestamp입니다.
   * 배달 시작 이벤트는 누락되지 않았다고 가정합니다.
   */
  function getDeliveryDuration(event$) {
    // 구현해 주세요
    return event$.pipe(noop);
  }

  /**
   * 동일한 transactionId와 타입을 가진 이벤트가 들어올 수 있습니다.
   * 이러한 이벤트를 필터링해주세요
   */
  function deduplicate(event$) {
    const cache = new Set();
    return event$.pipe(
      filter((event) => {
        const key = event.transactionId + event.type;
        if (cache.has(key)) {
          return false;
        } else {
          cache.add(key);
          return true;
        }
      })
    );
  }

  /**
   * 현재 배달 현황을 파악해야 합니다. 배달이 시작되었지만 배달이 완료되지 않은
   * 주문들이 있을 경우 transactionId를 모아서 배열로 출력해주세요.
   * transactionId는 배달이 시작 된 순으로 정렬되어 있어야 합니다.
   * 이벤트의 순서가 잘못되어 들어올 수 있기 때문에 배달현황이 항상 정확하진 않을 수 있습니다.
   */
  function getOrdersInDeliver(event$) {
    const ordersInDeliver = new Set();
    const alreadyDelivered = new Set();
    return deduplicate(event$).pipe(
      tap((event) => {
        if (alreadyDelivered.has(event.transactionId)) {
          return;
        }
        if (event.type === "배달시작") {
          ordersInDeliver.add(event.transactionId);
        } else if (event.type === "배달완료") {
          ordersInDeliver.delete(event.transactionId);
          alreadyDelivered.add(event.transactionId);
        }
      }),
      map(() => Array.from(ordersInDeliver)),
      filter((arr) => arr.length > 0)
    );
  }

  return {
    getPaidOrder,
    getTotalSales,
    getDeliveryDuration,
    deduplicate,
    getOrdersInDeliver,
  };
}
